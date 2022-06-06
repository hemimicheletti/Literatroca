import { AuthProvider } from "./auth";
import { BooksProvider } from "./books";
import { RegisterProvider } from "./register";

export const url = "https://capstone-t1.herokuapp.com";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <BooksProvider>
        <RegisterProvider>{children}</RegisterProvider>
      </BooksProvider>
    </AuthProvider>
  );
};

export default Providers;
