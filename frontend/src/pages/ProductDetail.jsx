import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../context/ShopContext'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import RelatedProduct from '../component/RelatedProduct';
import Loading from '../component/Loading';

function ProductDetail() {
  let { productId } = useParams();
  let { products, currency, addtoCart, loading } = useContext(shopDataContext);
  let [productData, setProductData] = useState(null);

  const [image, setImage] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [image4, setImage4] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage1(item.image1);
        setImage2(item.image2);
        setImage3(item.image3);
        setImage4(item.image4);
        setImage(item.image1);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div className='w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-col items-center justify-start'>
      
      {/* Top Section */}
      <div className='w-full flex flex-col lg:flex-row gap-5 mt-[80px] px-4 lg:px-10'>

        {/* Image Gallery */}
        <div className='lg:w-[50%] w-full flex flex-col lg:flex-row items-center gap-5'>

          {/* Thumbnails */}
          <div className='flex lg:flex-col gap-3'>
            {[image1, image2, image3, image4].map((img, i) => (
              <img key={i} src={img} alt="" onClick={() => setImage(img)}
                className='w-[60px] h-[60px] md:w-[100px] md:h-[110px] object-cover border rounded-md cursor-pointer bg-slate-300'
              />
            ))}
          </div>

          {/* Main Image */}
          <div className='w-full lg:w-[70%] h-[300px] md:h-[400px] lg:h-[500px] border rounded-md overflow-hidden'>
            <img src={image} alt="" className='w-full h-full object-fill rounded-md' />
          </div>
        </div>

        {/* Product Info */}
        <div className='lg:w-[50%] w-full flex flex-col gap-4 text-white'>
          <h1 className='text-[30px] md:text-[40px] font-semibold'>{productData.name.toUpperCase()}</h1>

          <div className='flex items-center gap-1'>
            <FaStar className='text-yellow-400 text-[20px]' />
            <FaStar className='text-yellow-400 text-[20px]' />
            <FaStar className='text-yellow-400 text-[20px]' />
            <FaStar className='text-yellow-400 text-[20px]' />
            <FaStarHalfAlt className='text-yellow-400 text-[20px]' />
            <p className='pl-2 text-[18px]'>(124)</p>
          </div>

          <p className='text-[28px] font-semibold'>{currency} {productData.price}</p>

          <p className='text-[18px] md:text-[20px] w-[90%]'>{productData.description} and Stylish, breathable cotton shirt with a modern slim fit. Easy to wash, super comfortable, and designed for effortless style.</p>

          <div className='flex flex-col gap-3 mt-4'>
            <p className='text-[22px]'>Select Size</p>
            <div className='flex flex-wrap gap-2 text-black'>
              {productData.sizes.map((item, index) => (
                <button key={index} onClick={() => setSize(item)}
                  className={`border py-2 px-4 rounded-md bg-slate-300 ${item === size ? 'bg-black text-[#2f97f1] text-[20px]' : ''}`}>
                  {item}
                </button>
              ))}
            </div>

            <button
              className='text-[16px] bg-[#495b61c9] py-[10px] px-[20px] rounded-2xl mt-[10px] border text-white shadow-md shadow-black'
              onClick={() => addtoCart(productData._id, size)}
            >
              {loading ? <Loading /> : "Add to Cart"}
            </button>
          </div>

          <div className='w-[90%] h-[1px] bg-slate-700 mt-4'></div>

          <div className='text-sm md:text-base'>
            <p>✅ 100% Original Product</p>
            <p>💵 Cash on delivery available</p>
            <p>🔁 Easy return/exchange within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className='w-full mt-[60px] px-4 lg:px-[80px]'>
        <div className='flex gap-3 mb-4'>
          <p className='border px-5 py-2 text-white text-sm'>Description</p>
          <p className='border px-5 py-2 text-white text-sm'>Reviews (124)</p>
        </div>

        <div className='bg-[#3336397c] text-white px-5 py-6 rounded-md text-[14px] md:text-[16px] lg:text-[18px]'>
          Upgrade your wardrobe with this stylish slim-fit cotton shirt, available now on OneCart. Crafted from breathable, high-quality fabric, it offers all-day comfort and effortless style. Easy to maintain and perfect for any setting, this shirt is a must-have essential for those who value both fashion and function.
        </div>
      </div>

      {/* Related Products */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
        currentProductId={productData._id}
      />
    </div>
  );
}

export default ProductDetail;
