import HTML5Logo from '@/components/logo/HTML5Logo.vue'
import CSS3Logo from '@/components/logo/CSS3Logo.vue'
import JavaScriptLogo from '@/components/logo/JavaScriptLogo.vue'
import TypeScriptLogo from '@/components/logo/TypeScriptLogo.vue'
import JavaLogo from '@/components/logo/JavaLogo.vue'
import RustLogo from '@/components/logo/RustLogo.vue'
import SpringBootLogo from '@/components/logo/SpringBootLogo.vue'
import NodeJsLogo from '@/components/logo/NodeJsLogo.vue'
import VueLogo from '@/components/logo/VueLogo.vue'
import ReactLogo from '@/components/logo/ReactLogo.vue'
import MySQLLogo from '@/components/logo/MySQLLogo.vue'
import MSSQLLogo from '@/components/logo/MSSQLLogo.vue'
import PostgreSQLLogo from '@/components/logo/PostgreSQLLogo.vue'
import MongoDBLogo from '@/components/logo/MongoDBLogo.vue'

const SCROLL_REVEAL_DELAY = 100

const langs = [
  {
    logo: HTML5Logo,
    label: 'HTML',
  },
  {
    logo: CSS3Logo,
    label: 'CSS',
  },
  {
    logo: JavaScriptLogo,
    label: 'JavaScript',
  },
  {
    logo: TypeScriptLogo,
    label: 'TypeScript',
  },
  {
    logo: JavaLogo,
    label: 'Java',
  },
  {
    logo: RustLogo,
    label: 'Rust',
  },
]

const libs = [
  {
    logo: NodeJsLogo,
    label: 'Node.js & Express.js',
  },
  {
    logo: SpringBootLogo,
    label: 'Spring Boot',
  },
  {
    logo: ReactLogo,
    label: 'React',
  },
  {
    logo: VueLogo,
    label: 'Vue',
  },
]

const dbs = [
  {
    logo: MySQLLogo,
    label: 'MySQL',
  },
  {
    logo: MSSQLLogo,
    label: 'Microsoft SQL Server',
  },
  {
    logo: PostgreSQLLogo,
    label: 'PostgreSQL',
  },
  {
    logo: MongoDBLogo,
    label: 'MongoDB',
  },
]

export { langs, libs, dbs, SCROLL_REVEAL_DELAY }
