declare module "*.css";
declare module "*.png";
declare module "*.svg";
declare module "*.jpg" {
  const value: string;
  export default value;
}
