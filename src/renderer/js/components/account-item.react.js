var React = require('react')

var AccountItem = React.createClass({
  render: function() {
    var account = this.props.account

    return(
      <div className="panel" key={ account.id }>
        <h4><i className="fa fa-angle-right"></i> { account.name }</h4>
        <div className="data">
          <span>{ account.address }</span>
          <span className="pull-right">{ account.amount } BC</span>
        </div>
      </div>
    )
  }
})

module.exports = AccountItem
