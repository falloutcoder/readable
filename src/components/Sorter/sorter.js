import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap'
import ArrowUpIcon from 'react-icons/lib/fa/angle-double-up'
import ArrowDownIcon from 'react-icons/lib/fa/angle-double-down'
import CalenderIcon from 'react-icons/lib/fa/calendar'
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-o-up'
import ThumbsDownIcon from 'react-icons/lib/fa/thumbs-o-down'
import './sorter.css'

class Sorter extends Component {
  render() {
    return (
      <div className="readable-sorter">
        <div className="well">
          <h4>Sort Order || Sort By</h4>
          <ButtonToolbar>
            <ButtonGroup>
              <Button className={ this.props.sortOrder === "descending" && "active"}
                      onClick={ this.props.sortInDescending }>
                <ArrowUpIcon />
              </Button>
              <Button className={ this.props.sortOrder === "ascending" && "active"}
                      onClick={ this.props.sortInAscending }>
                <ArrowDownIcon />
              </Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button className={ this.props.sortBy === "votes" && "active"}
                      onClick={ this.props.sortByVote }>
                <ThumbsUpIcon /><ThumbsDownIcon />
              </Button>
              <Button className={ this.props.sortBy === "date" && "active"}
                      onClick={ this.props.sortByDate }>
                <CalenderIcon />
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default Sorter;
