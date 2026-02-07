import ScrollVelocity from "../Animations/ScrollVelocity";

const ScrollVelocityCompnents = () => {
	return (
		<>
			<div className="">
				<ScrollVelocity texts={["React Bits", "Scroll Down"]} velocity={30} className="custom-scroll-text text-[#cd708b] text-sm sm:text-base md:text-lg " />
			</div>

		</>
	);
};
export default ScrollVelocityCompnents;
