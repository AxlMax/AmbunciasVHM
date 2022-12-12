import "../css/WaitPage.css"

function WaitPage() {
    return ( <>
        <div className="loader-container">
          <div className = "image">
                <img src="/ambulancia.gif" className="img-fluid"/>
          </div>
        </div>
    </>
    );
}

export default WaitPage;