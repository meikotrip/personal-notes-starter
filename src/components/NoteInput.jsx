import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: {
                title: '',
                body: ''
            },
            limitTitle: 50
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        this.setState((prevState) => {
            return {
                note: {
                    ...prevState.note,
                    title: event.target.value.slice(0, this.state.limitTitle)
                }
            }
        })
    }

    onBodyChangeHandler(event) {
        this.setState((prevState) => {
            return {
                note: {
                    ...prevState.note,
                    body: event.target.value
                }
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state.note);

        this.setState(() => {
            return {
                note: {
                    title: '',
                    body: ''
                }
            }
        });
    }

    render() {
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">Sisa Karakter: {this.state.limitTitle - this.state.note.title.length} </p>
                    <input type="text" className="note-input__title" placeholder="Ini adalah judul ..." value={this.state.note.title}  onChange={this.onTitleChangeHandler} required/>
                    <textarea type="text" className="note-input__body" placeholder="Tuliskan catatanmu disini ..." value={this.state.note.body} onChange={this.onBodyChangeHandler} required/>
                    <button type="submit">Buat</button>
                </form>
            </div>
        );
    }
}

export default NoteInput;