import React, { useState } from 'react';
import styles from '../../styles/styles';
import { Link } from 'react-router-dom';
import { categoriesData, productData } from '../../static/data';
import { AiOutlineSearch } from 'react-icons/ai';
import {IoIosArrowDown, IoIosArrowForward} from 'react-icons/io';
import {BiMenuAltLeft} from 'react-icons/bi'
import DropDown from "./DropDown"
import Navbar from './Navbar'

const Header = ({activeHeading}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchData, setSearchData] = useState('');
    const [dropDown, setDropDown] = useState(false);
    const [active, setActive] = useState('');
    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        const filteredProducts = productData?.filter((product) => product?.name?.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchData(filteredProducts);
    };
    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 70){
            setActive(true)
        }else{
            setActive(false)
        }
    })
    return (
        <>
            <div className={`${styles.section}`}>
                <div className="hidden 800px:h-[50px] 800px:flex 800px:my-[20px] items-center justify-between">
                    <div>
                        <Link to="/">
                            <img src="some.png" alt="" />
                        </Link>
                    </div>
                    {/* SEARCH */}
                    <div className="w-[50%] relative">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="search Item"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                        />
                        <AiOutlineSearch size={30} className='absolute right-2 top-1.5 cursor-pointer'/>
                        {searchData && searchData.length !== 0 ? 
                            <div className='absolute min-h-[30-vh] bg-slate-50 shadow-sm-2 z-[9] p-4'>
                                {searchData && searchData.map((item, idx)=>{
                                    const d = item.name;
                                    const product_name = d.replace(/\s+/g, "-");
                                    return(
                                        <Link key={idx} to={`/product/${product_name}`}>
                                            <div className="w-full flex items-start-py-3">
                                                <img 
                                                    src={item?.image_Url[0]?item?.image_Url[0]?.url:null} 
                                                    alt=""
                                                    className={`w-[40px] h-[40px] mr-[10px]`}
                                                />
                                                <h1>{item?.name}</h1>

                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>:null
                        }
                    </div>

                    <div className={`${styles.button}`}>
                        <Link to="seller">
                            <h1 className={`text-[#fff]`} flex items-center>
                                Become A Seller <IoIosArrowForward className='ml-1'/>
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={`${active? "shadow-sm fixed top-0 z-10": null} transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}>
                <div className={`${styles.section} relative ${styles.noramlFlex} justify-between`}>
                    {/* Categories */}
                    <div onClick={()=>setDropDown(!dropDown)}>
                        <div className="relative h-[60px] w-[270px] hidden 1000px:block">
                            <BiMenuAltLeft size={30} className='absolute top-3'/>
                            <button 
                                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
                            >
                                All Categories
                                
                            </button>
                            <IoIosArrowDown 
                                size={20}
                                className="absolute right-2 top-4 cursor-pointer"
                                onClick={()=>setDropDown(!dropDown)}
                            />
                            {
                                dropDown? (
                                    <DropDown 
                                        categoriesData={categoriesData}
                                        setDropDown={setDropDown}
                                    
                                    />
                                ):null
                            }
                           
                        </div>
                        
                    </div>
                     {/* NAVITEMS */}
                     <div className={`${styles.noramlFlex}`}>
                        <Navbar active={activeHeading}/>
                    </div>
                    
                    
                </div>
            </div>
        </>
    );
};

export default Header;
