import React from 'react';

class Hello extends React.Component {
    render() {
      return (
          <div>Hello {this.props.name}</div> //เรียกชื่อมาแสดงต้อง props
      )
    }
}
export default Hello;
