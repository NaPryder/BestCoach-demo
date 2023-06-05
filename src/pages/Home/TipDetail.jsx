const TipDetail = ({ headTitle, children, ...props }) => {
  return (
    <div className="tip-detail">
      <div className="head">
        <div className="stick"></div>
        <h3>{headTitle}</h3>
      </div>
      <p>{children}</p>
    </div>
  )
}

export default TipDetail
