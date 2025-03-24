import ProductDropdownButton from "./ProductDropdownButton";

function ProductsDropdown() {
  return (
    <div className="flex fixed top-[60px] right-0 left-0 w-[480px] bg-slate-700/35 bg- h-72 z-20 mx-auto rounded-xl shadow-slate-300 backdrop-blur-sm ">
      <ul className="text-gray-300 fixed right-0 text-base/10  p-5">
        <ProductDropdownButton>شاپینگ بگ</ProductDropdownButton>
        <ProductDropdownButton>هاردباکس</ProductDropdownButton>
        <ProductDropdownButton>باکس مقوایی</ProductDropdownButton>
        <ProductDropdownButton>باکس کیبوردی</ProductDropdownButton>
        <ProductDropdownButton>کاغذ پوستی</ProductDropdownButton>
        <ProductDropdownButton>لیبل</ProductDropdownButton>
      </ul>
      <ul className="text-gray-300 fixed right-1/2 text-base/10  p-5">
        <ProductDropdownButton>کارت کاستومر</ProductDropdownButton>
        <ProductDropdownButton>پاکت کاستومر</ProductDropdownButton>
        <ProductDropdownButton>کارت آویز</ProductDropdownButton>
        <ProductDropdownButton>اتیکت پشت یقه </ProductDropdownButton>
        <ProductDropdownButton>ربان چاپی</ProductDropdownButton>
      </ul>
    </div>
  );
}

export default ProductsDropdown;
