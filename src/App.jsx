export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#1a1a1a" }}>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(120deg, #1b5e20, #43a047)",
        color: "white",
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          GreenScape Landscaping
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "600px", margin: "0 auto" }}>
          Premium lawn care, garden design, and outdoor transformations that make your home stand out.
        </p>

        <button style={{
          marginTop: "20px",
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          background: "white",
          color: "#1b5e20",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Get Free Quote
        </button>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Our Services</h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px"
        }}>

          {[
            ["Lawn Care", "Mowing, edging, and full lawn maintenance."],
            ["Garden Design", "Custom landscape layouts for your home."],
            ["Tree Service", "Trimming, shaping, and health care."]
          ].map((item, i) => (
            <div key={i} style={{
              width: "250px",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{
        background: "#f5f5f5",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2>About Us</h2>
        <p style={{ maxWidth: "700px", margin: "0 auto" }}>
          We are a professional landscaping company dedicated to creating clean,
          modern, and beautiful outdoor spaces. We focus on quality, reliability,
          and customer satisfaction.
        </p>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Contact</h2>
        <p>Email: info@greenscape.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#1b5e20",
        color: "white",
        textAlign: "center",
        padding: "20px"
      }}>
        © 2026 GreenScape Landscaping
      </footer>

    </div>
  );
}
