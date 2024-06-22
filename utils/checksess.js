function checkSessionTimeout(req, res, next) {
 
    if (req.session && req.session.lastActivity) {
        const now = Date.now();
        const maxInactiveTime = 1 * 60 * 1500; // Max inactive time (e.g., 30 minutes)
        console.log('heres the sesh bro', req.session.lastActivity);
  
  
        if (now - req.session.lastActivity > maxInactiveTime) {
            // Session has expired, clear session data
            console.log('killing the sesh bro', req.session.lastActivity);
            req.session.destroy(err => {
                if (err) {
                    console.error('Error destroying session:', err);
                }
            });
  
            res.redirect('/login?redirected=true');
            return;
        }
    }
  
    // Update last activity timestamp
    if (req.session) {
      req.session.lastActivity = Date.now();
  }
    next();
  }

  module.exports = checkSessionTimeout;