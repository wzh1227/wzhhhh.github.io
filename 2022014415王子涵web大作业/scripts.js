let index = 0;
showSlides(index);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {index = 0}    
    if (n < 0) {index = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[index].style.display = "block";  
}

function plusSlides(n) {
    index += n;
    showSlides(index);  
}

setInterval(plusSlides, 3000, 1);

// 手动导航
document.querySelector('.manual-btn').addEventListener('click', function() {
    let slideNumber = this.getAttribute('data-slide');
    showSlides(slideNumber);
});
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        filterMenuItems(category);
    });
});

function filterMenuItems(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else if (item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
// 获取所有的分类按钮和菜品项
const categoryBtns = document.querySelectorAll('.category-btn');
const menuItems = document.querySelectorAll('.menu-item');

// 为每个分类按钮添加点击事件
categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // 获取当前点击的类别
        const category = this.getAttribute('data-category');
        // 调用函数来过滤菜品
        filterMenuItems(category);
    });
});

// 过滤菜品的函数
function filterMenuItems(category) {
    // 重置所有菜品的显示状态
    menuItems.forEach(item => {
        item.style.display = 'none'; // 先隐藏所有菜品
    });

    // 如果点击的是“全部”，则显示所有菜品
    if (category === 'all') {
        menuItems.forEach(item => {
            item.style.display = 'block';
        });
    } else {
        // 否则，只显示对应类别的菜品
        menuItems.forEach(item => {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            }
        });
    }

    // 重置所有按钮的激活状态
    categoryBtns.forEach(btn => {
        btn.classList.remove('active');
    });

    // 激活当前点击的按钮
    this.classList.add('active');
}

// 初始化页面时显示所有菜品
window.onload = function() {
    filterMenuItems('all');
};
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // 表单验证
    if (this.checkValidity() === false) {
        document.getElementById('form-messages').innerHTML = '请填写所有必填项。';
        return;
    }
    // 收集表单数据
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        items: document.getElementById('items').value
    };
    // 显示表单数据（在实际应用中，这里应该是发送到服务器）
    document.getElementById('form-messages').innerHTML = `订单已提交: <br>${JSON.stringify(formData)}`;
    // 清空表单
    this.reset();
});
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

// 显示第一个评价
testimonials[testimonialIndex].classList.add('active-testimonial');

// 设置轮播间隔
setInterval(() => {
    // 隐藏当前的评价
    testimonials[testimonialIndex].classList.remove('active-testimonial');
    // 计算下一个评价的索引
    testimonialIndex = (testimonialIndex + 1) % totalTestimonials;
    // 显示下一个评价
    testimonials[testimonialIndex].classList.add('active-testimonial');
}, 5000); // 每5秒切换一次评价
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        filterMenuItems(category);
    });
});

function filterMenuItems(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else if (item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    // 重置所有按钮的激活状态
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // 激活当前点击的按钮
    this.classList.add('active');
}
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // 表单验证
    if (this.checkValidity() === false) {
        document.getElementById('form-messages').innerHTML = '请填写所有必填项。';
        return;
    }
    // 收集表单数据
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        items: Array.from(document.getElementById('items').selectedOptions).map(option => option.value)
    };
    // 显示表单数据（在实际应用中，这里应该是发送到服务器）
    document.getElementById('form-messages').innerHTML = `订单已提交: <br>${JSON.stringify(formData)}`;
    // 清空表单
    this.reset();
});
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // 表单验证
    if (this.checkValidity() === false) {
        document.getElementById('form-messages').innerHTML = '请填写所有必填项。';
        return;
    }
    // 收集表单数据
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    // 显示表单数据（在实际应用中，这里应该是发送到服务器）
    document.getElementById('form-messages').innerHTML = `反馈已提交: <br>${JSON.stringify(formData)}`;
    // 清空表单
    this.reset();
});
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.menu-item input[type="checkbox"]');
    const totalDisplay = document.getElementById('total');

    function calculateTotal() {
        let total = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseInt(checkbox.value);
            }
        });
        totalDisplay.textContent = `￥${total}`;
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });

    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const formMessages = document.getElementById('form-messages');
        if (checkboxes.forEach(checkbox => checkbox.checked) === false) {
            formMessages.textContent = '请选择至少一个菜品。';
        } else {
            const selectedDishes = [];
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    selectedDishes.push(checkbox.id);
                }
            });
            formMessages.textContent = `订单已提交: ${selectedDishes.join(', ')}`;
            this.reset();
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.menu-item input[type="checkbox"]');
    const totalDisplay = document.getElementById('total');

    function calculateTotal() {
        let total = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseInt(checkbox.value);
            }
        });
        totalDisplay.textContent = `￥${total}`;
    }

    // 当菜品勾选状态变化时，更新总价
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });

    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const formMessages = document.getElementById('form-messages');
        if (checkboxes.forEach(checkbox => checkbox.checked) === false) {
            formMessages.textContent = '请选择至少一个菜品。';
        } else {
            const selectedDishes = [];
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    selectedDishes.push(`${checkbox.id} - ￥${checkbox.value}`);
                }
            });
            formMessages.textContent = `订单已提交: ${selectedDishes.join(', ')}`;
            this.reset();
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    function showCategory(category) {
        menuItems.forEach(item => {
            if (category === 'all' || item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            showCategory(category);
            // 重置所有按钮的激活状态
            categoryBtns.forEach(btn => btn.classList.remove('active'));
            // 激活当前点击的按钮
            this.classList.add('active');
        });
    });

    