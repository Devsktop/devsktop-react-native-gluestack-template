declare module "tailwind-variants/dist/config" {
  export interface TVConfig {
    // si sabes qué tipos usar, decláralos aquí
    [key: string]: any;
  }

  const config: TVConfig;
  export default config;
}
