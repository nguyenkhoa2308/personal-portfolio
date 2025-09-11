import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ngkhoa.dev@gmail.com",
      link: "mailto:ngkhoa.dev@gmail.com",
    },
    {
      icon: Phone,
      title: "Điện thoại",
      value: "+84 964 896 098",
      link: "tel:+84964896098",
    },
    {
      icon: MapPin,
      title: "Địa chỉ",
      value: "Hà Nội, Việt Nam",
    },
  ];

  return (
    <section className="py-20 bg-muted/10 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.h2
            className="text-6xl lg:text-8xl font-black text-foreground mb-8 tracking-tight"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            LIÊN HỆ
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hãy cùng thảo luận về dự án tiếp theo của bạn. Tôi luôn sẵn sàng
            lắng nghe và tư vấn.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-foreground mb-6">
                Thông tin liên hệ
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Tôi luôn mở cửa để thảo luận về các cơ hội hợp tác mới, chia sẻ
                ý tưởng hoặc đơn giản là trò chuyện về công nghệ.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info?.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground group-hover:text-primary transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-8 bg-card border-border">
              <h3 className="text-2xl text-foreground mb-6">Gửi tin nhắn</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Họ tên
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập họ tên của bạn"
                      className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-input-background border-border text-foreground placeholder-muted-foreground focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Nhập email của bạn"
                      className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-input-background border-border text-foreground placeholder-muted-foreground focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Chủ đề
                  </label>
                  <input
                    placeholder="Chủ đề tin nhắn"
                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-input-background border-border text-foreground placeholder-muted-foreground focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Tin nhắn
                  </label>
                  <textarea
                    placeholder="Nội dung tin nhắn của bạn..."
                    rows={6}
                    className="placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-input-background border-border text-foreground placeholder-muted-foreground focus:border-primary focus:ring-primary/20 resize-none"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md px-6 has-[>svg]:px-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground border-0 group">
                    <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                    Gửi tin nhắn
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
