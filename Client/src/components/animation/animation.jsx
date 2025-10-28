import { motion, stagger } from "framer-motion";

export function FadeInLeft({ children,  className = '', repeat = true, x = -20, duration = 0.5, delay = 0 }) {
  return (
    <motion.div className={className ? `${className}` : ''}
      initial={{ x, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration, delay }}
      viewport={{ once: !repeat, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInRight({ children,  className = '', repeat= true, x = 20, duration = 0.5, delay = 0 }) {
          return (
            <motion.div
            className={className ? `${className}` : ''}
              initial={{ x, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration, delay }}
              viewport={{ once: !repeat , amount: 0.2}}
            >
              {children}
            </motion.div>
          );
        }

export function FadeInUp({ children, className="", y = 20, repeat=true, duration = 0.6, delay = 0 }) {
          return (
            <motion.div
            className={ className ? `${className}`: ''}
              initial={{ y, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration, delay }}
              viewport={{ once: !repeat, amount: 0.2 }}

            >
              {children}
            </motion.div>
          );
        }
        export function FadeInDown({ repeat=true, className="", children, y = -20, duration = 0.6, delay = 0 }) {
          return (
            <motion.div
            className={className ? `${className}` : ''}
              initial={{ y, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration, delay }}
      viewport={{ once: !repeat }}

            >
              {children}
            </motion.div>
          );
        }


export function ScaleIn({ repeat=true, className = '', children, scale = 0.95, duration = 0.5, delay = 0 }) {
  return (
    <motion.div
    className={className ? `${className}` : ''}

      initial={{ scale, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration, delay }}
      viewport={{ once: !repeat, amount: 0.2 }}

    >
      {children}
    </motion.div>
  );
}

export const containerVariants = {
          hidden:{},
          show: {
                    transition: {
                              staggerChildren: 0.2,
                    }
          }
}
export const childupvariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export const childdownvariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const childleftnvariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const childrighttnvariants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
export function StaggeredContainer({ children, className='' }) {
          return (
            <motion.div
            className={className ? `${className}` : ''}
              variants={containerVariants}
              initial="hidden"
              // animate="show"
              whileInView="show"
            >
              {children}
            </motion.div>
          );
        }

        export function AnimatedCard({ children, className='', variants }) {
          return (
            <motion.div  className={className ? `${className}` : ''}
            variants={variants}>
              {children}
            </motion.div>
          );
        }