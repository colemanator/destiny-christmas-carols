// Lazy Load css
const styles = document.createElement('link');
styles.rel = 'stylesheet';
styles.type = 'text/css';
styles.href = '/styles.min.css'
document.getElementsByTagName('head')[0].appendChild(styles);

// lazy loads elements with default selector as '.lozad'
const observer = lozad(); 
observer.observe();