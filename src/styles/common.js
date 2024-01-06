const outlineBtnStyle = "rounded-md px-3 py-1 w-10 overflow-hidden relative group cursor-pointer border font-medium";
export const outlineBtnGreen = outlineBtnStyle + " border-green-600 text-green-600 text-white";
export const outlineBtnBlue = outlineBtnStyle + " border-blue-600 text-blue-600 text-white";
export const outlineBtnRed = outlineBtnStyle + " border-red-600 text-red-600 text-white";

const btnTransition = `
	absolute w-64 h-0 transition-all duration-300 origin-center rotate-45
	-translate-x-20 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease
`;
export const btnTransitionGreen = btnTransition + " bg-green-600";
export const btnTransitionBlue = btnTransition + " bg-blue-600";
export const btnTransitionRed = btnTransition + " bg-red-600";

const btnHover = "relative transition duration-300 group-hover:text-white ease";
export const btnHoverGreen = btnHover + " text-green-600";
export const btnHoverBlue = btnHover + " text-blue-600";
export const btnHoverRed = btnHover + " text-red-600";

const btn = `
    rounded-md px-3.5 py-2 w-28 overflow-hidden
    relative group cursor-pointer border-2 font-medium
    group-hover:text-white
`;
export const saveBtn = btn + " border-green-600 text-green-600";
export const cancelBtn = btn + " border-red-600 text-red-600";
const btnLayout = `
    absolute w-64 h-0 transition-all duration-300 origin-center
    rotate-45 -translate-x-20 top-1/2 group-hover:h-64
    group-hover:-translate-y-32 ease
`
const btnContent = "relative transition duration-300 group-hover:text-white ease";
export const saveBtnLayout = btnLayout + " bg-green-600";
export const saveBtnContent = btnContent + " text-green-600";
export const cancelBtnLayout = btnLayout + " bg-red-600";
export const cancelBtnContent = btnContent + " text-red-600";

export const formStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: "60%",
	minHeight: "auto",
    maxHeight: "80%",
	bgcolor: 'background.paper',
	boxShadow: 24,
    overflow: "auto",
	borderRadius: 2
};
export const deleteFormStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: "40%",
	minHeight: "20%",
    maxHeight: "30%",
	bgcolor: 'background.paper',
	boxShadow: 24,
    overflow: "auto",
	borderRadius: 2
};
export const logoutFormStyle = {
	position: 'absolute',
	top: '30%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: "40%",
	minHeight: "20%",
    maxHeight: "30%",
	bgcolor: 'background.paper',
	boxShadow: 24,
    overflow: "auto",
	borderRadius: 2
};