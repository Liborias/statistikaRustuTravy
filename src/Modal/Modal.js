import React from "react";

class Modal extends React.Component {
  state = {
    inputValue: this.props.data.description
  };

  render() {
    const { data, closeModal, updateDescritpion } = this.props;
    return (
      <div className="modal-wrapper">
        <div className="modal-content">
          <div className="modal-header">
            <span style={{ margin: "10px" }}>{data.priority}</span>
            <span>{data.taskName}</span>
            <button onClick={() => closeModal()}>X</button>
          </div>
          <div className="taskDetail">
            <input
              className="textDetail"
              type="text"
              onChange={e => this.setState({ inputValue: e.target.value })} //e se používá, protože tím písmenem začíná event (je to ustálené), target je označní vstupu (input) a value je jeden z atributů inputu
              value={this.state.inputValue}
            />
          </div>
          <button
            onClick={() => updateDescritpion(this.state.inputValue, data.id)}
          >
            Uložit
          </button>
        </div>
      </div>
    );
  }
}
export default Modal;
