    // Smooth scroll function
        function scrollTo(sectionId) {
            const element = document.getElementById(sectionId);
            const headerHeight = 80;
            const elementPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }

        // Show skill information
        function showSkillInfo(skill) {
            alert(`💡 ${skill}\n\nThis skill helps me create amazing web experiences! Click on other skills to learn more about my expertise.`);
        }

        // View project details
        function viewProject(projectName) {
            alert(`🚀 ${projectName}\n\nThis would open the project details or live demo. In a real portfolio, this would link to:\n\n• Live website\n• GitHub repository\n• Case study\n• Screenshots`);
        }

        // Send message function
        function sendMessage(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Show loading state
            const submitBtn = event.target.querySelector('.submit-btn');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate sending (in real life, this would connect to a backend)
            setTimeout(() => {
                alert(`✅ Thanks ${name}!\n\nYour message has been sent successfully. I'll get back to you soon!`);
                
                // Reset form
                event.target.reset();
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
            }, 1500);
        }

        // Add scroll effect to header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = '#1a252f';
            } else {
                header.style.background = '#2c3e50';
            }
        });