import { useContext, useState,} from 'react';
import { Link} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { authRepository } from '../repositories/auth';
import { SessionContext } from '../SessionProvider';
const APP_NAME = "snsapp"; // これが、リポジトリ名
function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { currentUser, setCurrentUser } = useContext(SessionContext);

  const signin = async () => {
    const user = await authRepository.signin(email, password);
    setCurrentUser(user);
  };
  if (currentUser != null) return <Navigate replace to ={APP_NAME +"/"}/>;
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-gray-900">BOTTI SNS APP</h2>
        <div className="mt-8 w-full max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  メールアドレス
                </label>
                <div className="mt-1">
                  <input
                  onChange={(e)=>setEmail(e.target.value)}
                    id="email"
                    name="email"
                    placeholder="メールアドレス"
                    required
                    type="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  パスワード
                </label>
                <div className="mt-1">
                  <input
                  onChange={(e)=>setPassword(e.target.value)}
                    id="password"
                    name="password"
                    placeholder="パスワード"
                    required
                    type="password"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button onClick={signin} disabled={email === '' || password === '' }className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed">
                  ログイン
                </button>
              </div>
              <div className="mt-4 text-center text-sm">
                登録は
                <Link className="underline" to={'/signup'}>
                  こちら
                </Link>
                から
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;