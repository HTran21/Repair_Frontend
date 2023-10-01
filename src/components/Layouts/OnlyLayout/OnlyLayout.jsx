

function OnlyLayout({ children }) {
    return (
        <div className="container">
            <div className="content">
                {children}
            </div>

        </div>
    );
}

export default OnlyLayout;