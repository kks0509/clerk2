import { auth } from '@clerk/nextjs';

const DashboardPage = () => {
  const { userId } = auth();

  return (
    <div>
      <h1 className="text-2x1 font-bold mb-7">Dashboard (대시보드)</h1>
      <p className="mb-7">
        Welcome to Dashboard. 로그인된 사용자의 정보를 보여줍니다.
      </p>
    </div>
  );
};

export default DashboardPage;
