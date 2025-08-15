// components/Header.js
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "#fff",
      borderBottom: "1px solid #eee"
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "10px 20px",
        display: "flex",
        flexWrap: "wrap", // permite să treacă pe rând nou pe mobil
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        
        {/* Brand: logo + text */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%", // pe mobil ocupă toată lățimea
          marginBottom: "10px"
        }}>
          <Image 
            src="/logo.png" 
            alt="ViziTurn Logo" 
            width={40} 
            height={40} 
          />
          <span style={{
            marginLeft: 8,
            fontWeight: "bold",
            fontSize: "20px"
          }}>
            ViziTurn
          </span>
        </div>

        {/* Meniul */}
        <nav style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center", // pe mobil centrează butoanele
          width: "100%"
        }}>
          <Link href="/despre-viziturn">
            <button style={{
              padding: "6px 12px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              background: "#fff",
              cursor: "pointer"
            }}>
              Despre Viziturn
            </button>
          </Link>

          <Link href="/reguli-disclaimer">
            <button style={{
              padding: "6px 12px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              background: "#fff",
              cursor: "pointer"
            }}>
              Reguli & Disclaimer
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
