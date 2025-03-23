import { useContext } from 'react';
import { SessionContext } from '../SessionProvider';

export function SideMenu() {
    const { currentUser } = useContext(SessionContext);
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-[200px] flex flex-col justify-center">
      <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
      <p>
        <strong>Name:</strong> {currentUser.userName}
      </p>
      <p className="bg-white">
        <strong className='bg-white p-1'>Email:</strong> {currentUser.email}
      </p>
    </div>
  );
}