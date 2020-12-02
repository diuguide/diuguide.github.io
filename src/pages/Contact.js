import React, { Component } from 'react'
import Banner from '../components/Banner/index';
import ContactCard from '../components/ContactCard/index';

export class Contact extends Component {
    state = {
        nameFirst: "Everett",
        nameLast: "Diuguid",
        phone: "(919) 801-8756",
        email: "everett.diuguid@gmail.com",
        position: "Full Stack Developer",
        linkedIn: "https://www.linkedin.com/in/everett-diuguid-583632197/",
        gitHub: "https://github.com/diuguide",
        contactGreet: "Thank you for taking a look at my web development portfolio, I look forward to working with you in the future! Please feel free to take a look at my linkedIn profile as well as my github repositories. Have a great day!"
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 d-block mx-auto">
                        <Banner
                            nameFirst={this.state.nameFirst}
                            nameLast={this.state.nameLast}
                            position={this.state.position}
                        />
                        <ContactCard
                            nameFirst={this.state.nameFirst}
                            nameLast={this.state.nameLast}
                            position={this.state.position}
                            email={this.state.email}
                            phone={this.state.phone}
                            linkedIn={this.state.linkedIn}
                            gitHub={this.state.gitHub}
                            contactGreet={this.state.contactGreet}

                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default Contact
