import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to landing page
    navigate("/landing");
  }, [navigate]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-50">
      <p className="text-blue-800 text-xl">
        Redirecionando para a página principal...
      </p>
    </div>
  );
}

export default Home;
