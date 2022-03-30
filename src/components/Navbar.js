import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <nav className='navbar'>
                <div className="btn-group">
                    {menuList.map((curElem) => {
                        
                        return (
                            <button key={curElem} className="btn-group__item" onClick={() => filterItem(curElem)}>{curElem}</button>
                        );
        })}
                </div>
            </nav>

        </>
    )
}

export default Navbar