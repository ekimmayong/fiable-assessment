import React from "react";

export const styles: { [key: string]: React.CSSProperties } = {
    app: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
    },

    header: {
        width: '700px',
        flexDirection: 'column',
        textAlign: 'center',
        gap: '10px',
        marginBottom: '20px',
    },

    appContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '700px',
        gap: '20px',
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    }
}