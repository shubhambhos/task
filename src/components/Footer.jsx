function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {currentYear} Wyreflow. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
