import React from "react";

class NoteSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
        }

        this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    }

    onSearchChangeHandler(event) {
        this.setState({ 
            search: event.target.value },
            () => {
            return this.props.searchNote(this.state);
          });
    }

    render() {
        return (
            <input type="text" className="note-search" placeholder="Cari Catatan" value={this.state.search} onChange={this.onSearchChangeHandler}/>
        )
    }
}

export default NoteSearch;