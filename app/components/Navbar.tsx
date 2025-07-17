'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [openProduct, setOpenProduct] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        
        {/* Logo */}
        <div className={styles.logo}>
          <Image src="/file.svg" alt="Logo" width={32} height={32} />
          <Link href = "/" style={{textDecoration:'none'}}>
          <span  className={styles.brand}>
            <span  className={styles.blue}>Med</span>
            <span className={styles.green}>Find</span>
            <span className={styles.gray}>Rx</span>
          </span>
          </Link>
        </div>

        {/* Menu Links */}
        <div className={styles.menuBar}>
          <Link href="/" style={{textDecoration:'none'}}>
            <span className={`${styles.navItem} ${styles.home}`}>Home</span>
          </Link>

          <div
            className={styles.navItem}
            onMouseEnter={() => setOpenProduct(true)}
            
          >
            <button className={styles.dropdownButton}>
              Products <ChevronDown className={styles.chevron} size={16} />
            </button>
            {openProduct && (
              <div className={styles.dropdownMenu}
              onMouseLeave={() => setOpenProduct(false)}>
                <Link href ="#" style={{textDecoration:'none'}}><span className={styles.dropdownItem}>Product 1</span></Link>
                <Link href="#" style={{textDecoration:'none'}}><span className={styles.dropdownItem}>Product 2</span></Link>
              </div>
            )}
          </div>

          <Link href="#" style={{textDecoration:'none'}}>
            <span className={styles.navItem}>Resource</span>
          </Link>

          <div
            className={styles.navItem}
            onMouseEnter={() => setOpenCompany(true)}
          //  onMouseLeave={() => setOpenCompany(false)}
          >
            <button className={styles.dropdownButton}>
              Company <ChevronDown className={styles.chevron} size={16} />
            </button>
            {openCompany && (
              <div className={styles.dropdownMenu}
               onMouseLeave={() => setOpenCompany(false)}
               >
                <Link href="#" style={{textDecoration:'none'}} ><span className={styles.dropdownItem}>About</span></Link>
                <Link href="#" style={{textDecoration:'none'}}><span className={styles.dropdownItem}>Careers</span></Link>
              </div>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <div className={styles.cta}>
          <Link href="/demo" style={{textDecoration:'none'}}>
            <span className={styles.ctaButton}>Schedule Demo</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
/*notes for dev::
Adjust menu to right 
work on settimeout function for dropdown menus
Use media query
*/

//code for navbar