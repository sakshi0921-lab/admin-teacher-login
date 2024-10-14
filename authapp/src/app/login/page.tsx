import LoginForm from "@/components/LoginForm"; 

export default function LoginPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4", 
        position: "relative",
      }}
    >
      <LoginForm />
      <div
        style={{
          backgroundImage: "url('/logo.jpg')",
          backgroundSize: "cover", 
          backgroundPosition: "right", 
          backgroundRepeat: "no-repeat",
          position: "absolute",
          right: 0, 
          top: 0,
          bottom: 0,
          width: "72%",
          height: "100%",
        }}
      />
    </div>
  );
}
