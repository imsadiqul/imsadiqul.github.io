        // Initialize Feather Icons
        feather.replace();

        // Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const icon = this.querySelector('[data-feather]');
            if (document.body.classList.contains('dark-mode')) {
                icon.setAttribute('data-feather', 'sun');
            } else {
                icon.setAttribute('data-feather', 'moon');
            }
            feather.replace();
        });

        // Follow button functionality with modal
        const followBtn = document.getElementById('followBtn');
        const successModal = document.getElementById('successModal');
        const modalText = document.getElementById('modalText');
        const closeModal = document.getElementById('closeModal');

        followBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const followUrl = this.getAttribute('href');
            
            modalText.textContent = "You are now following Sadiqul Islam! You'll be redirected to his LinkedIn profile.";
            successModal.classList.add('active');
            overlay.classList.add('active');
            
            setTimeout(() => {
                if (successModal.classList.contains('active')) {
                    window.open(followUrl, '_blank');
                    successModal.classList.remove('active');
                    overlay.classList.remove('active');
                }
            }, 3000);
        });

        // Message button functionality
        const messageBtn = document.getElementById('messageBtn');
        const typingIndicator = document.getElementById('typingIndicator');
        
        messageBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const emailUrl = this.getAttribute('href');
            
            typingIndicator.style.display = 'block';
            
            setTimeout(() => {
                typingIndicator.style.display = 'none';
                window.location.href = emailUrl;
            }, 2000);
        });

        // Close modal functionality
        closeModal.addEventListener('click', function() {
            successModal.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Description expand functionality
        const description = document.getElementById('description');
        description.addEventListener('click', function() {
            if (this.style.height === 'auto') {
                this.style.height = '60px';
                this.style.overflow = 'hidden';
            } else {
                this.style.height = 'auto';
                this.style.overflow = 'visible';
            }
        });

        // Online status toggle
        const onlineStatus = document.getElementById('onlineStatus');
        onlineStatus.addEventListener('click', function() {
            const statusDot = this.querySelector('.status-dot');
            const statusText = this.querySelector('span');
            
            if (statusText.textContent === 'Online') {
                statusText.textContent = 'Away';
                statusDot.style.background = '#ed8936';
                statusDot.style.animation = 'none';
            } else if (statusText.textContent === 'Away') {
                statusText.textContent = 'Offline';
                statusDot.style.background = '#a0aec0';
                statusDot.style.animation = 'none';
            } else {
                statusText.textContent = 'Online';
                statusDot.style.background = '#48bb78';
                statusDot.style.animation = 'blink 1.5s infinite';
            }
        });

        // Notification panel functionality
        const notificationBell = document.getElementById('notificationBell');
        const notificationPanel = document.getElementById('notificationPanel');
        const closeNotifications = document.getElementById('closeNotifications');
        const overlay = document.getElementById('overlay');
        const markAllRead = document.getElementById('markAllRead');

        notificationBell.addEventListener('click', function() {
            notificationPanel.classList.add('active');
            overlay.classList.add('active');
        });

        closeNotifications.addEventListener('click', function() {
            notificationPanel.classList.remove('active');
            overlay.classList.remove('active');
        });

        overlay.addEventListener('click', function() {
            notificationPanel.classList.remove('active');
            overlay.classList.remove('active');
            successModal.classList.remove('active');
        });

        markAllRead.addEventListener('click', function() {
            document.querySelectorAll('.notification-item.unread').forEach(item => {
                item.classList.remove('unread');
            });
            document.querySelector('.notification-count').textContent = '0 New';
            feather.replace();
        });

        // Add click effect to verified badge
        document.querySelector('.verified-badge').addEventListener('click', function() {
            alert('This profile is verified!');
        });

        // Re-initialize Feather Icons when theme changes
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    feather.replace();
                }
            });
        });
        
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['class']
        });