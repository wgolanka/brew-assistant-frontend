import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ViewCards } from "../view/ViewCards";
import { ViewModal } from "../view/ViewModal";
import { ViewDetails } from "../view/ViewDetails";
import AddBrewForm from "../components/AddBrewForm";

class Home extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            addBrewModalOpen: false,
            showTeaDetailsId: null,
            selectedTea: null,
        };
    }

    closeDetails = () => {
        this.setState({
            showTeaDetailsId: null,
            selectedTea: null,
        });
    };

    setShowTeaDetailsId = (teaId) => {
        this.setState({
            showTeaDetailsId: teaId,
            selectedTea: this.props.teas.find(tea => tea.id === teaId),
        });
    };

    toggleModalAddTea = () => {
        this.setState((prevState) => ({
            addBrewModalOpen: !prevState.addBrewModalOpen
        }));
    };

    render() {
        const { addBrewModalOpen, showTeaDetailsId, selectedTea } = this.state;

        return (
            <React.Fragment>
                <ViewCards
                    teas={ this.props.teas }
                    setShowTeaDetailsId={ this.setShowTeaDetailsId }
                    openModalAddTea={this.toggleModalAddTea}
                />

                { addBrewModalOpen && (
                    <ViewModal
                        open={ !!addBrewModalOpen }
                        close={ this.closeDetails }
                    >
                        <AddBrewForm
                            close={this.toggleModalAddTea}
                        />
                    </ViewModal>) }

                { !!showTeaDetailsId && (
                    <ViewModal
                        open={ !!showTeaDetailsId }
                        close={ this.closeDetails }
                    >
                        <ViewDetails
                            tea={ selectedTea }
                            close={ this.closeDetails }
                        />
                    </ViewModal>) }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        teas: state.listTeas.teas
    }
};

export default connect(mapStateToProps)(Home);
