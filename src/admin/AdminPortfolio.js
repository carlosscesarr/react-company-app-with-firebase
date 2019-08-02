import React, { Component } from 'react';
import config, { storage } from './../firebase-config';

class AdminPortifolio extends Component {
    constructor(props) {
        super(props);
        this.state = { form: { title: '', description: '', image: '' } };
    }

    savePortfolio = (e) => {
        e.preventDefault();
        console.log(this.title.value);
        console.log(this.description.value);
        console.log(this.image.value);

        const file = this.image.files[0];
        const { name, size, type } = file;

        const ref = storage.ref(name);
        ref.put(file)
            .then(img => {
                img.ref.getDownloadURL()
                    .then(downloadURL => {
                        const newPortfolio = {
                            title: this.title.value,
                            description: this.description.value,
                            imageUrl: downloadURL
                        }
                        config.push('portfolio', {
                            data: newPortfolio
                        });
                    });
            });
    }
    render() {
        return (
            <div style={{ paddingLeft: '120px', paddingRight: '120px' }}>
                <h2>Portifolio - Área Administrativa</h2>
                <form onSubmit={this.savePortfolio}>
                    <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>Título</label>
                        <input type='text' className='form-control' id='title' ref={(ref) => this.title = ref} aria-describedby='emailHelp' placeholder='Digite título' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>Descrição</label>
                        <input type='text' className='form-control' id='descricao' placeholder='Descição' ref={(ref) => this.description = ref} />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>Imagem</label>
                        <input type='file' className='form-control-file' id='imagem' ref={(ref) => this.image = ref} />
                    </div>

                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>

            </div>
        )
    }
}

export default AdminPortifolio;