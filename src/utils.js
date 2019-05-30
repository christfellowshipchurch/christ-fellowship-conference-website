export default () => {

}

export const mapEdgesToNodes = (data) => data.edges.map(n => n.node);
export const redirectTo = (uri) => window.location.href = uri;