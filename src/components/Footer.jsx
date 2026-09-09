function Footer() {
  return (
    <footer id="kontak" style={{ background: '#f5f5f5', padding: '40px 20px 0', textAlign: 'center' }}>
      {/* Social Icons Placeholder */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '24px', marginBottom: '30px' }}>
        <a href="#" style={iconStyle}>💬</a>
        <a href="#" style={iconStyle}>✉️</a>
        <a href="#" style={iconStyle}>💼</a>
        <a href="#" style={iconStyle}>💻</a>
        <a href="#" style={iconStyle}>📷</a>
      </div>
      <div style={{ background: '#888', height: '60px', width: '100%' }}></div>
    </footer>
  );
}

const iconStyle = { textDecoration: 'none', color: '#333' };

export default Footer;