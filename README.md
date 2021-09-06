![image](https://user-images.githubusercontent.com/33584960/132153195-0741b0bb-6a27-4574-8fd6-bb22ed491ec2.png)
Preview: https://color-func.vercel.app/
# ColorFunc
An extremely flexible pallette generator.

Motivation:

![image](https://user-images.githubusercontent.com/33584960/132152235-9035b18d-8ad6-46eb-9e85-e3d649954a15.png)

https://tailwindcss.com/docs/customizing-colors

See Writeup on Hashnode: https://2manypistachios.hashnode.dev/introducing-colorfunc

## Project Structure Extends Default Next.js Structure.
/utils.color.js is the code for color generation on which the UI is built on.

## Points of Interest:
/components/elements: Reusable components with limited if any logic
/components/modules: Reusable components with extensive logic
/components/layouts: Wrappers
/components/state.js: All project states written in recoil.js 
/utils.Fauna.js: The database methods used for the project called in the API routes.

## License

This project is under [MIT License](LICENSE)

## Credits

&copy; 2021 Created by [Max Pod](https://github.com/2manypistachios)
