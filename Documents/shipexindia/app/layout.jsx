import Header from "@/Components/Common/Header/Header";
import "./globals.css";
import StyledComponentsRegistry from "./registry";

export const metadata = {
  title: "Shipex India",
  description:
    "Get connected to the world. Making transportation fast and safe. We make distribution easy. Your gateway to any destination in the world. Time is money. We save you both. The future depends on what you do today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
