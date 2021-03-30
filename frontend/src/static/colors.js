export const theme = {
    colors: {
        brown: '#402519',
        black: '#000000',
        white: '#fffff',
    },
    
    whiteOpacity: {
        one: 'rgba(255, 255, 255, 0.1)',
        three: 'rgba(255, 255, 255, 0.3)',
        five: 'rgba(255, 255, 255, 0.5)',
        seven: 'rgba(255, 255, 255, 0.7)',
        nine: 'rgba(255, 255, 255, 0.9)'
    },

    blueOpacity: {
        one: 'rgba(0, 51, 102, 0.1)',
        three: 'rgba(0, 51, 102, 0.3)',
        five: 'rgba(0, 51, 102, 0.5)',
        seven: 'rgba(0, 51, 102, 0.8)',
        nine: 'rgba(0, 51, 102, 0.9)'
    },

    fontSize: {
        hg: '32px',
        md: '24px',
        sm: '18px',
        tn: '14px',
    },
}

export const getFontSize = size => props => props.theme.fontSize[size]
export const getColor = color => props => props.theme.color[color]

