import { shimmer_card_unit } from "../constant";

// Shimmer card to display with animation
const CardShimmer = () => {
    return (
    <div className="basis-[250px] mob:basis-[150px] p-2.5 mb-2.5 shadow-lg animate-pulse">
        <div className="h-[144px] w-[230px] bg-bio mob:w-[130px] mob:h-[81px]"></div>
        <div className="w-3/5 mt-2.5 h-[15px]  bg-bio "></div>
        <div className="w-4/5 mt-1 h-[15px]  bg-bio"></div>
        <div className="w-full mt-[18px] h-[15px]  bg-bio"></div>
    </div>
    );
}

const Shimmer = () => {
return (
    <div className="flex flex-wrap gap-5 justify-center">
    {new Array(shimmer_card_unit).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
    })}
    </div>
);
};
export default Shimmer;
