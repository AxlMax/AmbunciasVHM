import "./WaitPage.css"

function WaitPage() {
    return ( <>
        <div className="loader-container">
          <div className = "image">
                <img src="/ambulancia.gif" class="img-fluid"/>
          </div>
        </div>
    </>
    );
}

export default WaitPage;