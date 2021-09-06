![image](https://user-images.githubusercontent.com/33584960/132153195-0741b0bb-6a27-4574-8fd6-bb22ed491ec2.png)

Preview: https://color-func.vercel.app/

Writeup: https://2manypistachios.hashnode.dev/introducing-colorfunc
# ColorFunc
An extremely flexible pallette generator.

Motivation:

![image](https://user-images.githubusercontent.com/33584960/132152235-9035b18d-8ad6-46eb-9e85-e3d649954a15.png)

https://tailwindcss.com/docs/customizing-colors


## Project Structure Extends Default Next.js Structure.
/utils.color.js is the code for color generation on which the UI is built on.

## Points of Interest:
/components/elements: Low-level components with limited if any logic

/components/modules: High-level components with extensive logic

/components/layouts: Wrappers

/components/state.js: All project states written for recoil.js 

/utils.Fauna.js: The database methods used for the project called in the API routes.

## Todos:
- Fire the monkey that coded this
- Counsel the rubber ducky forced to witness this monstrosity
- Add user-generated presets to frontpage
- Add interactivity to frontpage
- Add ability to use custom hues
- Add ability to create custom themes for hues
- Add help function with presets for all math-color functions
- Add improvements to ColorBox to give more info on hover
- Remove ES6 Map from /utils/color.js and refractor project

## License

This project is under [MIT License](LICENSE)

## Credits

&copy; 2021 Created by [Max Pod](https://github.com/2manypistachios)
