import { supabase } from '../lib/supabase';
export const postRepository = {
    async create(content,userId) {
        const {data,error}=await supabase
        .from('posts')
        .insert([{content,user_id:userId}])
        .select();
        if(error != null) throw new Error(error.message);
        return data[0];
    },
    async find(page,limit) {
        page=isNaN(page)||page<1?1:page;
        const start= limit * (page - 1);//何番目から取得するか0から始まる
        const end= start + limit - 1;//何番目まで取得するか
        const {data,error}= await supabase
        .from('posts_view')
        .select("*")//全ての意味
        .range(start,end)//取得する範囲
        .order('created_at', {ascending:false});//新しい順に並び替えascendingは昇順という意味
        if(error != null) throw new Error(error.message);
        return data.map((post) => {
            return{
                ...post,
                userId:post.user_id,
                userName:post.user_metadata.name,
            };
    });
    },
    async delete(id){
        const {error}= await supabase.from('posts').delete().eq("id", id);//matchは複数条件、eqは単一条件での比較に使いやすい
        if(error != null) throw new Error(error.message);
        return true;//成功したらtrueを返す
    }
};