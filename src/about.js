const aboutContent = () => {
    const content = document.querySelector('#content');

    content.innerHTML = '';

    content.innerHTML = `
    <div class="about-content">
        <div class="about-image">

        </div>
        <div class="about-text">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa dolores nihil sed repellendus. Culpa minima ipsam exercitationem a non esse amet cum, error molestiae harum reprehenderit rem dolores ut?
            </p>
            <br>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid dolorum eligendi recusandae blanditiis doloremque quo repellat quas tempora, non et maxime in quod molestiae beatae quasi enim quaerat ratione.
            </p>
        </div>
    </div>
    `;

}

export default aboutContent;