import React from 'react';

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            search: '',
            type: 'all',
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return (
            <div className='row'>
                <div className='input-field'>
                    <input
                        className='validate'
                        placeholder='search'
                        type='search'
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKey}
                    />
                    <div className='radio-row'>
                        <p>
                            <label>
                                <input
                                    name='group1'
                                    type='radio'
                                    data-type='all'
                                    onChange={this.handleFilter}
                                    checked={this.state.type === 'all'}
                                />
                                <span>All</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    name='group1'
                                    type='radio'
                                    data-type='movie'
                                    onChange={this.handleFilter}
                                    checked={this.state.type === 'movie'}
                                />
                                <span>Movies Only</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    name='group1'
                                    type='radio'
                                    data-type='series'
                                    onChange={this.handleFilter}
                                    checked={this.state.type === 'series'}
                                />
                                <span>Series Only</span>
                            </label>
                        </p>
                    </div>
                    <button
                        className='btn search-btn'
                        onClick={() =>
                            this.props.searchMovies(
                                this.state.search,
                                this.state.type
                            )
                        }
                    >
                        Search
                    </button>
                </div>
            </div>
        );
    }
}

export { Search };
