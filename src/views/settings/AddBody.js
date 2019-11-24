import React from "react";

class AddBody extends Component {
    render() {
        return (

        );
        }
}

export default AddBody;

// const AddBody = ({ configs }) =>
//   configs.map((config, index) => {
//     const { order_num, limit } = config;
//     return (
//       <FormGroup row key={order_num}>
//         <Col xs="4" md="3">
//           <Label htmlFor="text-input">เลข {order_num}</Label>
//         </Col>
//         <Col xs="8" md="5">
//           <Input
//             id={`up_two_order_num_${order_num}`}
//             value={limit}
//             onChange={e => this.handleChange(config, index, e)}
//           />
//         </Col>
//       </FormGroup>
//     );
//   });