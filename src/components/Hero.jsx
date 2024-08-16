const Hero = () => {
  return (
    <div className="container flex items-center w-2/3 m-auto my-8">
        <div className="container1 w-1/2">
            <h1 className="font-bold text-6xl">YOUR FEET DESERVE THE BEST</h1>
            <p className="text-sm w-1/2 my-10">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="container1Btn flex items-center gap-8">
                <button className="bg-red-700 p-[9.5px] px-3 rounded-sm text-white font-medium">Shop Now</button>
                <button className="border-2 p-2 px-3 rounded-sm border-gray-600 font-medium">Category</button>
            </div>
            <div className="available my-8">
                <p >Also Available On</p>
                <div className="images grid grid-cols-2 w-1/5 py-2">
                    <img src="public\images\flipkart.png" alt="" />
                    <img className="py-1" src="public\images\amazon.png" alt="" />
                </div>
            </div>
        </div>
        <div className="container2 w-5/12"><img src="public\images\shoe_image.png" alt="shoe" />
        </div>
        
    </div>
  );
}
export default Hero;