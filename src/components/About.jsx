function About() {
  return (
    <div className="bg-black ">
      <div className="max-w-[1024px] mx-auto h-[400px] flex justify-center items-center">
        <img
          src="https://cdn.dribbble.com/users/2085015/screenshots/4358563/media/261fd6f013c3e7470e10d31ac56728e7.gif"
          alt=""
          className="w-full h-full object-contain ml-[-25%] opacity-20"
        />
        <div className="max-w-[450px]">
          <p className="text-white font-bold text-right text-xl font-IBMPlex mb-9">
            درباره ما
          </p>
          <p className="text-white text-right text-justify font-IBMPlex">
            شروع به کار مجموعه چاپ و بسته بندی های لوکس حمزه در تاریخ ۱۳۸۷ توسط
            برادران حمزه به عنوان سرمایه گذاران و مدیران مجموعه می باشد. تمام
            پکیج های طراحی و چاپ شده این مجموعه زیر نظر بهترین و مجرب ترین
            ناظران و کارشناسان صنعت چاپ و بسته بندی صورت گرفته است که همین امر
            باعث پیشرفت و متمایز گشتن مجموعه چاپ و بسته بندی های لوکس حمزه از
            .دیگر همکاران توسط مخاطبین و مصرف کنندگان این صنعت می باشد
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
