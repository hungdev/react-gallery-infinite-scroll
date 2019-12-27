import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal, Loader } from 'semantic-ui-react'
import uuidv4 from 'uuid/v4'

class GalleryModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isFetch: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.getImages()
  }

  async getImages() {
    const { data } = this.state
    try {
      this.setState({ isFetch: true })
      let response = await fetch(
        'https://randomuser.me/api/?results=25&inc=picture&noinfo',
      );
      let responseJson = await response.json();
      const arrFormat = responseJson.results && responseJson.results.map(e => ({ id: uuidv4(), url: e.picture.large }))
      const dataAdded = [...data, ...arrFormat]
      const checkLengthData = dataAdded.length > 105 ? dataAdded.slice(0, 105) : dataAdded
      this.setState({ data: checkLengthData, isFetch: false })
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isFetch: false })
    }
  }

  handleScroll(e) {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      this.getImages()
    }
  }

  render() {
    const { data, isFetch } = this.state
    const { open, onClose } = this.props
    return (
      <Modal
        open={open}
        onClose={onClose}
        className='modal-gallery'
      >
        <Modal.Header>Profile Picture: There are {data.length} pictures</Modal.Header>
        <Modal.Content image scrolling onScroll={this.handleScroll}>
          <Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped />

          <Modal.Description>
            <Header>Modal Header</Header>
            <p>
              This is an example of expanded content that will cause the modal's
              dimmer to scroll
            </p>
            <div>
              {data.map((e, i) => <Image key={i} src={e.url} style={{ width: 150, display: 'inline-block', }} />)}
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={onClose}>
            Close Now <Icon name='chevron right' />
          </Button>
        </Modal.Actions>
        <div><Loader disabled={!isFetch} /></div>
      </Modal>
    )
  }
}

export default GalleryModal
